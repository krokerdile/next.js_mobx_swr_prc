import { useRouter } from 'next/router'

export default function OptionalSlugPage() {
  const router = useRouter()
  console.log(router.query.slug)
  return (
    <>
      <>블로그 slug 페이지 테스트</>
      {/* <p>Post:{router.query.slug}</p> */}
    </>
  )
}
