// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// REF: https://en.wikipedia.org/wiki/Uniform_Resource_Identifier

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

// Basic URI validation using regex
export const URISchema = z.string().regex(
	/^([a-z][a-z0-9+.-]*):(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/,
	'Invalid URI format'
).register(dsbunnyRegistry, {
	id: 'URISchema',
	description: 'Basic URI validation using regex.',
});

// Specialised URI validation for S3 URIs
export const S3URISchema = z.string().regex(
	/^s3:\/\/[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\/.*)?$/,
	'Invalid S3 URI format'
).register(dsbunnyRegistry, {
	id: 'S3URISchema',
	description: 'Specialised URI validation for S3 URIs.',
});

// Basic URN validation using regex
export const URNSchema = z.string().regex(
	/^urn:[a-z0-9][a-z0-9-]{0,31}:[a-z0-9()+,\-.:=@;$_!*'%]+$/,
	'Invalid URN format'
).register(dsbunnyRegistry, {
	id: 'URNSchema',
	description: 'Basic URN validation using regex.',
});
