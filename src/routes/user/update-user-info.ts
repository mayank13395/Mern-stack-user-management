import { UserModel } from "../../model/user.model";

const update = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    const {
        firstName,
        lastName,
        email
    } = req.body;

    const profileObj = {
        user: req.user.id,
        firstName,
        lastName,
        email
    }

    try {
        let profile = await UserModel.findOne({ user: req.user.id });

        if (profile) {
            // need to update
            profile = await UserModel.findOneAndUpdate({ user: req.user.id },
                { $set: profileObj },
                { new: true });
            res.json(profile);
        }
        // need to create 
        profile = new UserModel(profileObj);
        await profile.save();
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Sever error!')
    }
}
