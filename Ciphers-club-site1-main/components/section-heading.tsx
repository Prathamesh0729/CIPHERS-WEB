import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  kicker: string
  title: string
  className?: string
}

export function SectionHeading({
  index,
  kicker,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 md:mb-14', className)}>
      <div className="mb-3 flex items-center gap-3 font-mono text-sm text-primary">
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
        <span className="tracking-widest uppercase">{kicker}</span>
      </div>
      <h2 className="font-mono text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
