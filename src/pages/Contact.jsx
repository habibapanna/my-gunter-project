import { motion } from "framer-motion";
import Banner2 from "../components/Banner2/Banner2";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Starts slightly below with opacity 0
            animate={{ opacity: 1, y: 0 }} // Moves up and fades in
            exit={{ opacity: 0, y: -20 }} // Moves up and fades out on exit
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        >
            <Banner2 />
            <ContactForm />
        </motion.div>
    );
};

export default Contact;
