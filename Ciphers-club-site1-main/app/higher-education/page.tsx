import { DepartmentPage } from '@/components/department-page'
import { departments } from '@/lib/content'

export default function HigherEducationPage() {
  const department = departments.find(
    (item) => item.key === 'higher-ed',
  )

  if (!department) {
    return null
  }

  return <DepartmentPage department={department} />
}
