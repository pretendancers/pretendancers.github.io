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
		avatar: '/about/jacky.jpg',
		name: 'Jacky@LazyDesigners',
	},
	{
		avatar: '/about/niuniu.jpg',
		name: 'niuniu',
	},{
		avatar: '/about/zoroada.jpg',
		name: 'zoroada',
	},
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>special thanks to</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>
