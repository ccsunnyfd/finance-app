import PixIcon from '@mui/icons-material/Pix'
import Linkbar from './Linkbar'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex-between mb-1 py-2 text-grey-300">
      {/* LEFT SIDE */}
      <div className="flex-between gap-3">
        <PixIcon className="text-[28px]" />
        <h4 className="text-[16px]">Finanseer</h4>
      </div>

      {/* RIGHT SIDE */}
      <Linkbar />
    </div>
  )
}

export default Navbar
