import React from 'react'

function SvgIcon({ children, isHover = false }) {
  return (
    <div
      className={
        isHover
          ? `stroke hover:stroke-white flex items-center justify-center w-full h-full m-auto stroke-purple-600`
          : `stroke stroke-white `
      }
    >
      <div className="w-6">{children}</div>
    </div>
  )
}

export default SvgIcon
