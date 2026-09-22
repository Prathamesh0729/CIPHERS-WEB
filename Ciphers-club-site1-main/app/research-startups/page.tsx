import { DepartmentPage } from '@/components/department-page'
import { departments } from '@/lib/content'

export default function ResearchStartupsPage() {
  const department = departments.find(
    (item) => item.key === 'startup',
  )

  if (!department) {
    return null
  }

  return <DepartmentPage department={department} />
}
