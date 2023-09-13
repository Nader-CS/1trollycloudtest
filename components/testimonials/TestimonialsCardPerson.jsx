import Image from 'next/image'
import React from 'react'

const TestimonialsCardPerson = ({item,style}) => {
  return (
    <div
    className={`${style} col-lg-4 col-12 p-4 d-flex flex-column justify-content-between`}
  >
    <p>
      {item.text1}
    </p>
    <div className=" d-flex gap-2">
      <Image
        src={item.Person}
        width={100}
        height={100}
        alt="person1"
      />
      <div className="align-self-end">
        <p className="m-0 p-0 fw-bold">{item.name1}</p>
        <p className="m-0 p-0">{item.pos1}</p>
      </div>
    </div>
  </div>
  )
}

export default TestimonialsCardPerson