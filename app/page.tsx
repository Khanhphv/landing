import { redirect } from 'next/navigation'
import Main from './Main'

export default async function Page() {
  return redirect('/applications')
}
