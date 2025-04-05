// src/components/PageWrapper.jsx
const PageWrapper = ({ children }) => {
    return (
      <section className="min-h-[calc(100vh-4rem)] pb-4 px-6 flex flex-col items-center text-center overflow-x-hidden">
        {children}
      </section>
    )
  }
  
  export default PageWrapper;
  