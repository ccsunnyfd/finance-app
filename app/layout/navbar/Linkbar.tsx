'use client'

import Link from 'next/link'
import { useState } from 'react'

type Props = {}

const Linkbar = (props: Props) => {
  const [selected, setSelected] = useState('dashboard')

  return (
    <div className="flex-between gap-8">
      <div className="hover:text-primary-100">
        <Link
          href="/"
          onClick={() => setSelected('dashboard')}
          className={selected === 'dashboard' ? '' : 'text-grey-700'}
        >
          dashboard
        </Link>
      </div>

      <div className="hover:text-primary-100">
        <Link
          href="/predictions"
          onClick={() => setSelected('predictions')}
          className={selected === 'predictions' ? '' : 'text-grey-700'}
        >
          predictions
        </Link>
      </div>
    </div>
  )
}

export default Linkbar
