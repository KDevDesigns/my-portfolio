import React from 'react'
import Image from 'next/image'
import Cover from "@/lib/Cicada Hills/Main/MainCicadaHills.svg"
import { Badge } from '@/components/ui/badge'
import { BriefcaseBusiness, Brush, Clock } from 'lucide-react'

export default function HeroSection() {
    
  return (
    <div className='flex flex-row items-center font-sans text-lg mx-24'>
    <div className='flex-1/2 flex flex-col gap-2'>
    <Badge className='px-2 py-2 bg-teal-700'>Case Study</Badge>
    <h1 className='text-4xl font-semibold text-teal-700'>Cicada Hills</h1>
    <p>From Messenger Chaos to Seamless Booking at Cicada Hills</p>
    <li className="flex items-center gap-2"><Clock/>July 2025 – September 2025</li>
    <li className='flex item-center gap-2'><Brush/>Lead UI/UX Designer</li>
    <li className='flex item-center gap-2'><BriefcaseBusiness/>Research, personas, journey mapping, wireframing, prototyping, usability testing, and design refinement.</li>
    </div>
    <Image className='flex-1/2' src={Cover} alt='Cicada Hills Hero Image' width={500} height={500} />
    </div>
  )
}
