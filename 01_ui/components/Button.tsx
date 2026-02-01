type Props = {
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'var(--w3-purple)',
        color: '#fff',
        border: 'none',
        padding: '14px 28px',
        borderRadius: '999px',
        fontSize: '16px',
        fontWeight: 600,
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}
