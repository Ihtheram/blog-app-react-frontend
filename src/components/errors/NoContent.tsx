import React from 'react'

export const NoContent = (props : {pageName : string, contentsName : string}) => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <h4 className='fw-normal'>This {props.pageName} has no {props.contentsName} yet!</h4>
    </div>
  )
}
