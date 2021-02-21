function chessboard(totalRows)
{
    const rowTypeOne = " # # # #";
    const rowTypeTwo = "# # # # ";
    const newline = "\n";

    for (let i = 1; i <= totalRows; i++)
    {
        if (i % 2 === 0)
        {
            console.log(rowTypeOne + newline );
        }
        else 
        {
            console.log(rowTypeTwo + newline);
        }
    }
}

chessboard(8);
