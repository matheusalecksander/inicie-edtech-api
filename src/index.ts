import 'dotenv/config'
import { app } from './presentation/server'

app.listen(3000, () => {
  console.log('Server is running 🔥🚀')
})
