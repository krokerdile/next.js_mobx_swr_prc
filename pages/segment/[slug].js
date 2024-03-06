import { useRouter } from 'next/router'

export default function BlogSlugPage() {
  const router = useRouter()
  return (
    <>
      <>블로그 slug 페이지 테스트</>
      <p>Post:{router.query.slug}</p>
    </>
  )
}
