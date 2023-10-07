type Props = {
  title: string
  sideText: string
  subtitle?: string
  icon?: React.ReactNode
}

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  return (
    <div className="flex-between mx-4 mt-6 text-grey-400">
      <div className="flex-between">
        {icon}
        <div className="w-full">
          <h4 className="-mb-[0.1rem]">{title}</h4>
          <h6>{subtitle}</h6>
        </div>
      </div>
      <h5 className="font-bold text-secondary-500">{sideText}</h5>
    </div>
  )
}

export default BoxHeader
