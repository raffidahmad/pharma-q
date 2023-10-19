'use client'

import Question from '@/components/Question';
import Image from 'next/image';
import { sampleQuestion } from '@/static/sampleQuestion';
import QuestionPage from '@/components/Quiz';

export default function Home() {
  return (
    <main className=''>
      <Image
        src='/images/bg/logo.svg'
        alt=''
        className='object-contain object-center'
        width={1920}
        height={1080}
      />

      <Image
        src='/images/bg/pagetwo.svg'
        alt=''
        className='object-contain object-center'
        width={1920}
        height={1080}
      />

      <div className='grid grid-cols-2 gap-10 max-w-7xl mx-auto'>
        <div></div>
        <div>
          <Question  {...sampleQuestion} />
        </div>

      </div>

      <QuestionPage />

    </main>
  );
}
