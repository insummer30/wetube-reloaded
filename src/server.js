import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

// 서버 생성
const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// 서버 리스닝 시작
const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);