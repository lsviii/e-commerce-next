const Loading = () => {
  return (
    <div
      className="text-center position-fixed w-100 h-100 loading"
      style={{
        background: '#0008',
        color: 'white',
        top: 0,
        left: 0,
        zIndex: 9,
      }}
    >
      <svg width="205" height="250" viewBox="0 0 40 50"/>
      
    </div>
  )
}

export default Loading
