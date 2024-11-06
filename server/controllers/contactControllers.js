import Contact from '../models/contactModel.js';

export const contactControllers = {
  message: async (req, res) => {
    try {
      const { fullName, email, phoneNumber, message } = req.body;

      if (!fullName)
        return res.status(400).json({ msg: 'Please enter your full name.' });
      if (!email)
        return res.status(400).json({ msg: 'Please enter your email.' });
      if (!phoneNumber)
        return res.status(400).json({ msg: 'Please enter your phone number' });
      if (!message)
        return res.status(400).json({ msg: 'Please enter your message' });

      const newContact = await Contact({
        fullName,
        email,
        phoneNumber,
        message,
      });

      await newContact.save();

      return res
        .status(201)
        .json({ msg: 'Message Sent Successfully!', data: newContact });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
