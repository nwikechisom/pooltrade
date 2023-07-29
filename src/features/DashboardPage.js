import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function DashboardPage() {
  const token = useSelector((state) => state.auth.token)
  return (
    <div>
      Heyyyy!!
      <p>{token}</p>
    </div>
  )
}
