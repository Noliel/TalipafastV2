import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, LeafIcon } from "lucide-react";
import Link from 'next/link';

const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description: 'Get your order within the day',
  },
  {
    name: 'Guaranteed Fresh',
    Icon: CheckCircle,
    description: 'Every item here is fresh',
  },
  {
    name: 'Nature',
    Icon: LeafIcon,
    description: 'We Help our nature',
  },
]

export default function Home() {
  return (
    <>
  <MaxWidthWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
      Fresh Local Goodies Swift to your {' '}
        <span className='text-orange-500'>
           Home
        </span>
      </h1>
      <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
        Welcome to Talipafast&apos; we&lsquo;re happy to serve&rsquo;
      </p>
    <div className='flex flex-col sm:flex-row gap-4 mt-6'>
      <Link href='/products' className={buttonVariants()}> Our Fresh Products</Link>
      <Button variant='ghost'>Other Products &rarr;</Button>
      </div>
    </div>

    {/*LIST TO DO */}
  </MaxWidthWrapper>

  <section className='border-t border-gray-200 bg-gray-50'>
    <MaxWidthWrapper className='py-20'>
      <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
        {perks.map((perk) => (
          <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            <div className='md:flex-shrink-0 flex justify-center'>
              <div className='h-16 w-16 flex items-center justify-center rounded-full bg-orange-400 text-white'>
                {<perk.Icon className='w-1/3 h-1/3'/>}
              </div>
            </div>

            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
              <h3 className='text-base font-medium text-gray-900'>
                {perk.name}
              </h3>
              <p className='mt-3 text-sm text-muted-foreground'>
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  </section>
  </>
  )
}
