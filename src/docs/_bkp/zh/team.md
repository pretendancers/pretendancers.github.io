---
layout: page
---

<script setup>
import {
	VPTeamPage,
	VPTeamPageTitle,
	VPTeamMembers,
	VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
	{
		avatar: '../../0098.webp',
		name: '0098',
	},
	{
		avatar: '../../earth.webp',
		name: '🌎',
	},
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title></template>
    <!-- <template #lead>...</template> -->
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
