import Link from 'next/link';

export default function About(){
    return (<>
       <h1>This is About Page</h1>
       <h5><Link href="/">Go Back to Home Page</Link></h5>
    </>)
}