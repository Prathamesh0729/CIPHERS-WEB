import { DepartmentPage } from '@/components/department-page'
import { departments } from '@/lib/content'

export default function ProgrammingPage() {
  const department = departments.find(
    (item) => item.key === 'programming',
  )

  if (!department) {
    return null
  }

  return <DepartmentPage department={department} />
}
