// components/PageWrapper.jsx
const PageWrapper = ({ children }) => {
  return (
    <main className="min-h-[100dvh] bg-white dark:bg-[#0c0c0f] text-black dark:text-white transition-colors duration-300 px-4 pt-6 pb-24">
      {children}
    </main>
  )
}

export default PageWrapper
