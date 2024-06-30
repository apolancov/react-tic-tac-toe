export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
  
    const handlerClick = () => {
      updateBoard(index);
    }
  
    return (
      <div onClick={handlerClick} className={className} >
        {children}
      </div >
    )
  }
