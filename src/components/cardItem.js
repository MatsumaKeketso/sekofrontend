import React from 'react'

const Card = ({name, gender, birth, onChildClick}) => {
  const item = {
    name: name,
    gender: gender,
    birth: birth
  }
    return (
        <div style={card} onClick={() => onChildClick(item)}>
            <div style={nameWrapper}>
                <p style={title}>{name}</p>
            </div>
            <div style={details}>
                <p style={detailText}>{gender}</p>
                <p style={detailText}>Born {birth}</p>
            </div>
        </div>
    )
}
// CSS
const title = {
    whiteSpace: "pre",
    fontWeight: 700,
    fontFamily: `"Inter-Bold", "Inter", sans-serif`,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 1.2,
    color: "#ffffff",
    margin: 0,
    padding: 0
  }
  const detailText = {
    flexShrink: 0,
    overflow: "visible",
    whiteSpace: "pre",
    letterSpacing: 0,
    lineHeight: 1.2,
    fontSize: '.9rem',
    color: "#949494",
    fontFamily: `"Inter", sans-serif`,
    margin: '0px 0px 0px 0px',
    padding: 0
  }
const card = {
  boxSizing: "border-box",
  width: "auto", /* 192px */
  height: "auto", /* 150px */
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
  backgroundColor: "var(--token-7169fcc9-ceaa-45cd-8a23-e903c131f6af, #121212)",
  overflow: "visible",
  borderRadius: 8,
  margin:2
}
const nameWrapper = {
    boxSizing: "border-box",
    width: "auto", /* 182px */
    height: "auto", /* 68px */
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffb442",
    overflow: "visible",
    borderRadius: 8,
  }
  const details = {
    boxSizing: "border-box",
    width: "auto", /* 130px */
    height: "auto", /* 72px */
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    overflow: "visible",
  }
export default Card