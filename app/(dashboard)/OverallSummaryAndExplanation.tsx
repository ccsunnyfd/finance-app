'use client'

import BoxHeader from './components/BoxHeader'

const OverallSummaryAndExplanation = () => {
  return (
    <div className="h-full w-full">
      <BoxHeader title="Overall Summary and Explanation Data" sideText="+15%" />
      <div className="mx-4 mb-[0.4rem] mt-5 h-[15px] rounded-2xl bg-primary-800">
        <div className="h-[15px] w-2/5 rounded-2xl bg-primary-600" />
      </div>
      <h6 className="mx-4">
        Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
        ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas molestie
        volutpat et. Malesuada quis pretium aliquet lacinia ornare sed. In
        volutpat nullam at est id cum pulvinar nunc.
      </h6>
    </div>
  )
}

export default OverallSummaryAndExplanation
