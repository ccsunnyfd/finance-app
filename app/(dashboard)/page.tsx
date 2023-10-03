import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'

const page = () => {
  return (
    <div>
      <div className="grid-template-small-screens lg:grid-template-large-screens grid h-full w-full auto-cols-[1fr] auto-rows-[5px] gap-6 lg:grid-cols-[repeat(3,_minmax(370px,_1fr))] lg:grid-rows-[repeat(10,_minmax(60px,_1fr))]">
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  )
}

export default page
