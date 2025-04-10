import dakotaSig from '../assets/dakotas-sig.svg'

export default function FooterQuote() {
  return (
    <div className="mt-20 w-full px-6 text-center text-lg text-zinc-400">
      {/* Quote */}
      <p className="italic mb-2">
        “You Gotta Get To It, Instead of Getting Thru It.”
      </p>

      {/* Signature */}
      <div className="flex justify-center mb-2">
        <img
          src={dakotaSig}
          alt="Dakota's signature"
          className="h-14 opacity-80"
        />
      </div>

      {/* Developer Credit */}
      <p className="mr-4 text-xs">
        Website by{' '}
        <a
          href="https://github.com/jeimcg"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition"
        >
          Jei M.
        </a>
      </p>
    </div>
  )
}
