import { DepartmentPage } from '@/components/department-page'
import { departments } from '@/lib/content'

export default function SocialMediaPage() {
  const department = departments.find(
    (item) => item.key === 'social',
  )

  if (!department) {
    return null
  }

  return <DepartmentPage department={department} />
}
