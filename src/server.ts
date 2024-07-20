import fastify from "fastify";
import cors from '@fastify/cors'
import { createTrips } from "./routes/create-trip";
import {
  validatorCompiler, 
  serializerCompiler
} from "fastify-type-provider-zod"
import { confirmTrip } from "./routes/confirm-trips";
import { confrimParticipants } from "./routes/confirm-participants";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-links";
import { getParticipants } from "./routes/get-participants";
import { createInvite } from "./routes/create-invite";
import { updateTrip } from "./routes/update-trip";
import { getTripDetails } from "./routes/get-trip-details";
import { getParticipant } from "./routes/get-participant";
import { errorHandler } from "./error-handler";
import { env } from "./env";

const app = fastify()

app.register(cors, {
  origin: '*'
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(createTrips)
app.register(confirmTrip)
app.register(confrimParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipant)


app.listen({ port: env.PORT }).then(() => {
  console.log('Server running!')
})