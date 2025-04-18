import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from '../firebase'
import toast, { Toaster } from 'react-hot-toast'

const ITEMS_PER_PAGE = 8

const Photos = () => {
  const [mediaItems, setMediaItems] = useState([])
  const [lastVisible, setLastVisible] = useState(null)
  const [pageStack, setPageStack] = useState([])
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPage()
  }, [])

  const fetchPage = async (direction = 'next') => {
    setLoading(true)
    let q
  
    if (direction === 'prev') {
      const prevStack = [...pageStack]
      const popped = prevStack.pop()
      setPageStack(prevStack)
      q = query(
        collection(db, 'photos'),
        orderBy('timestamp', 'desc'),
        limit(ITEMS_PER_PAGE),
        startAfter(popped)
      )
    } else {
      q = lastVisible
        ? query(
            collection(db, 'photos'),
            orderBy('timestamp', 'desc'),
            startAfter(lastVisible),
            limit(ITEMS_PER_PAGE)
          )
        : query(
            collection(db, 'photos'),
            orderBy('timestamp', 'desc'),
            limit(ITEMS_PER_PAGE)
          )
    }
  
    const querySnapshot = await getDocs(q)
    const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  
    if (items.length === 0 && direction === 'next') {
      toast('✅ All photos loaded')
    }
  
    if (direction === 'next' && lastVisible) {
      setPageStack([...pageStack, lastVisible])
    }
  
    setMediaItems(items)
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1])
    setLoading(false)
  }
  
  return (
    <section className="min-h-screen bg-white text-black dark:bg-[#0c0c0f] dark:text-white relative px-4">
      <Toaster position="bottom-center" toastOptions={{ style: { background: '#333', color: '#fff' } }} />

      <h2 className="text-center text-2xl font-bold mt-8">📸 Photo/Vids</h2>

      {loading ? (
        <p className="text-center mt-4">Loading media...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-6">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-md overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelected(item)}
            >
              {item.type === 'image' ? (
                <img src={item.url} alt={item.alt} className="object-cover w-full h-48" />
              ) : (
                <video src={item.url} className="object-cover w-full h-48" muted autoPlay loop />
              )}
              <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {item.type === 'image' ? '📷 Photo' : '🎥 Video'}
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          {selected.type === 'image' ? (
            <img src={selected.url} alt={selected.alt} className="max-w-full max-h-full rounded shadow-lg" />
          ) : (
            <video src={selected.url} controls autoPlay className="max-w-full max-h-full rounded shadow-lg" />
          )}
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mt-4 mb-10">
        <button
          onClick={() => fetchPage('prev')}
          disabled={pageStack.length === 0}
          className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm px-4 py-2 rounded disabled:opacity-40"
        >
          ⬅ Prev
        </button>
        <button
          onClick={() => fetchPage('next')}
          className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm px-4 py-2 rounded"
        >
          Next ➡
        </button>
      </div>
    </section>
  )
}

export default Photos;