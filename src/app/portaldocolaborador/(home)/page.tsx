'use client'

import LinkCard from '../../../components/link-card/index';

import collaboratorLinks from '@/configs/link-cards';

export default function PortalColaborador() {

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">

      {/* Utils section */}
      <section className='max-[360px]:h-[150vh] h-[120vh] xl:h-screen gap-5 sm:gap-10 w-full flex flex-col items-center justify-start'>
        <div className='w-full bg-primary h-[12%] md:h-[15%] lg:h-1/4 flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold text-white sm:text-4xl lg:text-5xl'>Portal do Colaborador</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center w-full gap-4'>
          <div className='w-full text-center'>
            <h3 className='text-lg font-semibold lg:text-2xl text-secondary'>Links úteis</h3>
          </div>
          {/* Card link */}
          {collaboratorLinks[0].infos.map((link, index) => {
            return <LinkCard 
              variant='primary'
              key={index}
              title={link.title} 
              description={link.description}
              icon={link.icon}
              linkPath={link.linkPath}
              />
          })}

        </div>
      </section>

      {/* Training section */}
      <section className='h-[60vh] xl:h-screen bg-primary w-full flex flex-col gap-10 lg:gap-20 items-center justify-center'>
        <h2 className='text-lg font-semibold text-white lg:text-2xl'>Links de Treinamento</h2>
        <div className='flex flex-wrap items-center justify-center w-full gap-6'>
          {/* Card link */}
          {collaboratorLinks[1].infos.map((link, index) => {
            return <LinkCard 
              key={index}
              title={link.title} 
              iconAlign='center'
              description={link.description}
              linkPath={link.linkPath}
              />
          })}

        </div>
      </section>

      {/* Department section */}
      <section className='h-[120vh] xl:h-screen w-full flex flex-col gap-10 items-center justify-center'>
        <h2 className='text-lg font-semibold text-secondary lg:text-2xl'>Links de Setores</h2>
        <div className='flex flex-wrap items-center justify-center w-full gap-6'>
          {/* Card link */}
          {collaboratorLinks[2].infos.map((link, index) => {
            return <LinkCard
              className='w-4/5 sm:w-80 h-28'
              iconAlign='center'
              key={index}
              variant='secondary'
              title={link.title} 
              description={link.description}
              icon={link.icon}
              linkPath={link.linkPath}
              />
          })}

        </div>
      </section>
    </div>
  );
}
