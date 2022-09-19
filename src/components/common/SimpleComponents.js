import styled from "styled-components";

const FlexDiv = styled.div`
    display:flex;
    ${({ column }) => {
        if (column) {
            return 'flex-direction:column;'
        }
    }}
`

export default FlexDiv