export default function App() {
  return (
    <div className="container p-4">
      <TailwindCSSButton>
        TailwindCSS
      </TailwindCSSButton>
  </div>
  )
}

function TailwindCSSButton({ children, href }) {
  return (
    <a href={href} className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">{children}</a>
  )
}