import Link from "next/link";
function Navigation(){
    return(
        <nav>
  <Link href="/">Home</Link>
      <Link href="/health">Health</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/settings">Settings</Link>
        </nav>
  
   
    )
}
export default Navigation