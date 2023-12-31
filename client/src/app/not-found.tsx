import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h2>Not Found</h2>
      <p>The page you are looking is not found</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}