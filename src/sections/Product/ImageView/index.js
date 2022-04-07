import { Stack } from "@mui/material";
export const ImageView = ({ productFeatures, currFeature, b1 }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "sticky",
        top: "70px",
        zIndex: 9,
        height: "calc(100vh - 80px)",
        width: "100%",
      }}
    >
      <Stack
        sx={{
          width: b1 ? "440px" : "540px",
          height: b1 ? "440px" : "540px",
          borderRadius: 2,
          background: productFeatures[currFeature].color,
          position: "relative",
          transition: "all ease 0.5s",
        }}
      >
        {productFeatures.map(({ illus }, idx) => (
          <img
            key={idx}
            src={`${illus}.svg`}
            width={b1 ? "620px" : "760px"}
            height={b1 ? "620px" : "760px"}
            alt=""
            className={`illus ${currFeature === idx ? "anim-illus" : " "}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "scale(0.5)",
              visibility: "hidden",
              marginTop: b1 ? "-310px" : "-380px",
              marginLeft: b1 ? "-310px" : "-380px",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};
