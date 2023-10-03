const page = () => {
  return (
    <div>
      <div className="grid-template-small-screens lg:grid-template-large-screens grid h-full w-full auto-cols-[1fr] auto-rows-[5px] gap-6 lg:grid-cols-[repeat(3,_minmax(370px,_1fr))] lg:grid-rows-[repeat(10,_minmax(60px,_1fr))]">
        <div className="grid-area-a flex items-center justify-center bg-white text-5xl text-purple-500">
          a
        </div>
        <div className="grid-area-b flex items-center justify-center bg-white text-5xl text-purple-500">
          b
        </div>
        <div className="grid-area-c flex items-center justify-center bg-white text-5xl text-purple-500">
          c
        </div>
        <div className="grid-area-d flex items-center justify-center bg-white text-5xl text-purple-500">
          d
        </div>
        <div className="grid-area-e flex items-center justify-center bg-white text-5xl text-purple-500">
          e
        </div>
        <div className="grid-area-f flex items-center justify-center bg-white text-5xl text-purple-500">
          f
        </div>
        <div className="grid-area-g flex items-center justify-center bg-white text-5xl text-purple-500">
          g
        </div>
        <div className="grid-area-h flex items-center justify-center bg-white text-5xl text-purple-500">
          h
        </div>
        <div className="grid-area-i flex items-center justify-center bg-white text-5xl text-purple-500">
          i
        </div>
        <div className="grid-area-j flex items-center justify-center bg-white text-5xl text-purple-500">
          j
        </div>
      </div>
    </div>
  )
}

export default page
