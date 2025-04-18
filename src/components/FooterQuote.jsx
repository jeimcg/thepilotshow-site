import dakotaSig from '../assets/dakota-sigv2.svg'

export default function FooterQuote() {
  return (
    <div className="mt-20 w-full px-6 text-center text-lg text-zinc-600 dark:text-zinc-400">
      {/* Quote */}
      <p className="italic mb-2 text-black/70 dark:text-white/80">
        “You Gotta Get To It, Instead of Going Thru It.”
      </p>

      {/* Signature */}
      <div className="flex justify-center mb-2">
        <img
          src={dakotaSig}
          alt="Dakota's signature"
          className="h-14 opacity-70 dark:invert"
        />
      </div>

      {/* Developer Credit */}
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Website by{' '}
        <a
          href="https://github.com/jeimcg"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-800 dark:hover:text-white transition"
        >
          Jei M.
        </a>
      </p>
    </div>
  )
}
