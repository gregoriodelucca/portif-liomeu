import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="h-screen flex flex-col justify-center items-center bg-primary text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold">Oi! Eu sou o Gregório 👨‍💻</h1>
      <p className="mt-4 text-xl">Desenvolvedor Front-End apaixonado por React</p>
    </motion.header>
  );
}
