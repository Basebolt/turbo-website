export const Ring = ({ color, radius, circumference, percent }) => {
  return (
    <circle
      stroke={color}
      strokeWidth="30"
      strokeLinecap="round"
      strokeDasharray={`${circumference} ${circumference}`}
      strokeDashoffset={`${circumference - (percent / 100) * circumference}`}
      fill="transparent"
      r={radius}
      cx="300"
      cy="300"
      style={{
        transition: "1s stroke-dashoffset",
        transform: "rotate(-90deg)",
        transformOrigin: "50% 50%",
      }}
    />
  );
};
