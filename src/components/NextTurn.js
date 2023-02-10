
const NextTurn = ({xTurn}) => {
    return (
        <div style={{
            fontSize: "1.5rem", 
            fontWeight: "500",
        }}>
            {xTurn ? `X's Turn` : `O's Turn`}
        </div>
  );
};

export {NextTurn}