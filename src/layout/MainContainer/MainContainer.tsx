import './MainContainer.scss'

interface Props {
    children: React.ReactNode;
    isCollapsed: boolean;
}

const MainContainer = ({children, isCollapsed}:Props) => {
  return (
    <main className={`main-container ${isCollapsed?"collapsed":"expanded"}`}>
      {children}
    </main>
  )
}

export default MainContainer
