import { mongoose } from 'mongoose'
import { caseSchema } from './articleSchemas/caseSchema'
import { cpuSchema } from './articleSchemas/cpuSchema'
import { GrakaSchema } from './articleSchemas/gpuSchema'
import { mainboardSchema } from './articleSchemas/mainboardSchema'
import { multimediaCableSchema } from './articleSchemas/multimediaCableSchema'
import { powerAdapterSchema } from './articleSchemas/powerAdapterSchema'
import { ramSchema } from './articleSchemas/ramSchema'
import { screenSchema } from './articleSchemas/screenSchema'
import { soundCardSchema } from './articleSchemas/soundCardSchema'
import { storageSchema } from './articleSchemas/storageSchema'

export const ArticleDataModel1 = mongoose.model('articleDB', {
    caseSchema,
    cpuSchema,
    GrakaSchema,
    mainboardSchema,
    multimediaCableSchema,
    powerAdapterSchema,
    ramSchema,
    screenSchema,
    soundCardSchema,
    storageSchema,
})

export const ArticleDataModel2 = mongoose.model('caseCol', caseSchema)
