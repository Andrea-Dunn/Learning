
const NextTurn = ({xTurn}) => {
    console.log(xTurn)
    return (
        <div style={{
            fontSize: "2rem", 
            fontWeight: "500"
        }}>
            Next Turn: {xTurn ? 'Xs Turn' : 'Os Turn'}
        </div>
  );
};

export {NextTurn}