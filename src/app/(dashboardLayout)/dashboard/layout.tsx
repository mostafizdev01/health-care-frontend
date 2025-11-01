

export default function layout({children}: {children:React.ReactNode}) {
  return (
    <div>
        <h2>This is dashboard header</h2>
      {children}
      this is dashboard footer
    </div>
  )
}
